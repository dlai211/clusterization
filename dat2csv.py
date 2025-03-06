import struct
import pandas as pd
import os

def read_binary_data(binary_file, start_offset, ele_offsets):
    """
    Reads and parses binary data from a file into a DataFrame.
    
     - Number of measurement (size of the dump) found in 0-7 (unsigned long long) 
     - local0 found in 8-11 (float)
     - local1 found in 12-15 (float)
     - var_local0 found in offset 16-19 (float)
     - var_local1 found in offset 20-23 (float)
     - geometry ID found in offset 24-31 (unsigned long long)
     - measurement_id found in offset 32-39 (unsigned long long)
     - cluster_link found in offset 40-47 (unsigned long long)
     - meas_dim found in offset 48-51 (unsigned int)

    Args:
        binary_file (str): Path to the binary file.
        start_offset (int): Offset to start reading from.
        ele_offsets (list): Byte offsets for unpacking.

    Returns:
        pd.DataFrame: DataFrame containing the parsed data.
    """
    # Define an empty DataFrame 
    data = []

    # Get the total file size
    file_size = os.path.getsize(binary_file)

    # Read the binary data
    with open(binary_file, "rb") as bin_file:
        # mm = 
        print("number of measurements:", struct.unpack("Q", bin_file.read(8))[0])
        
        bin_file.seek(start_offset)
        raw_bytes = bin_file.read(file_size - start_offset)


    # Ensure offsets are consistent
    if len(ele_offsets) < 9:
        raise ValueError("ele_offsets must contain at least 9 elements for parsing.")

    # Process the binary data
    for i in range(0, len(raw_bytes), ele_offsets[-1]):
        try:
            new_data = {
                "local0": struct.unpack("f", raw_bytes[i + ele_offsets[0]: i + ele_offsets[1]])[0],
                "local1": struct.unpack("f", raw_bytes[i + ele_offsets[1]: i + ele_offsets[2]])[0],
                "var_local0": struct.unpack("f", raw_bytes[i + ele_offsets[2]: i + ele_offsets[3]])[0],
                "var_local1": struct.unpack("f", raw_bytes[i + ele_offsets[3]: i + ele_offsets[4]])[0],
                "geometry_id": struct.unpack("Q", raw_bytes[i + ele_offsets[4]: i + ele_offsets[5]])[0],
                "measurement_id": struct.unpack("Q", raw_bytes[i + ele_offsets[5]: i + ele_offsets[6]])[0],
                "cluster_link": struct.unpack("Q", raw_bytes[i + ele_offsets[6]: i + ele_offsets[7]])[0],
                "meas_dim": struct.unpack("I", raw_bytes[i + ele_offsets[7]: i + ele_offsets[8]])[0],
            }
            data.append(new_data)
        except struct.error as e:
            print(f"Error unpacking at index {i}: {e}")
            break
    
    # create the dataframe
    df = pd.DataFrame(data)

    return df

# Configuration
# binary_file = "test_measurements/event000000001-measurements.dat"
binary_file = "/eos/user/j/jlai/Traccc/traccc/data/output/event000000000-measurements.dat"

start_offset = 8
ele_offsets = [0, 4, 8, 12, 16, 24, 32, 40, 44, 64]

# Read the binary data into a DataFrame
df = read_binary_data(binary_file, start_offset, ele_offsets)

# Save the DataFrame to a CSV file
# csv_file = "test_measurements/measurements.csv"
csv_file = "/eos/user/j/jlai/Traccc/traccc/data/output/measurements.csv"

df.to_csv(csv_file, index=False)

print(f"{binary_file} saved to {csv_file}")
