import json
from collections import Counter

def detect_duplicates(pairs):
    keys = [k for k, v in pairs]
    counter = Counter(keys)
    duplicates = {k: count for k, count in counter.items() if count > 1}
    if duplicates:
        print("Duplicate keys found:")
        for key, count in duplicates.items():
            print(f"  {key}: {count} times")
    return dict(pairs)  # return as normal dict for further processing

with open('/eos/user/j/jlai/g200/gpu/G-200/traccc-athena/run/ITk_digitization_config_with_strips.json', 'r') as f:
    data = json.load(f, object_pairs_hook=detect_duplicates)