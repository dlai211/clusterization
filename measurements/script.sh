setupATLAS
asetup Athena,25.0.23,gcc13 --cuda
cd /eos/user/j/jlai/Traccc/traccc/data
../build/bin/traccc_seq_example_cuda \
  --input-events=1 \
  --detector-file=/eos/user/j/jlai/itk_data/ITk_DetectorBuilder_geometry.json \
  --grid-file=/eos/user/j/jlai/itk_data/ITk_DetectorBuilder_surface_grids.json \
  --digitization-file=/eos/user/j/jlai/itk_data/ITk_digitization_config.json \
  --use-detray-detector \
  --input-directory=/eos/user/j/jlai/itk_data/ITk_hit_data \
  --input-skip=1 \
  --output-directory=/eos/user/j/jlai/Documents/clusterization/measurements \
  --output-data-format=csv \
  | tee /eos/user/j/jlai/Documents/clusterization/measurements/traccc_run.log

