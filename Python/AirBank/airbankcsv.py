import csv
import json
import os
import tkinter as tk
from tkinter import filedialog

def keep_columns(input_file, output_file, columns_to_keep, delimiter=';', encoding='cp1250', ignore_transaction_types=None):
    if ignore_transaction_types is None:
        ignore_transaction_types = []

    with open(input_file, 'r', newline='', encoding=encoding) as infile:
        try:
            reader = csv.reader(infile, delimiter=delimiter)
            rows = list(reader)
        except UnicodeDecodeError:
            print(f"Unable to decode the file with '{encoding}' encoding.")
            return

    # Filter rows based on transaction types to ignore
    rows_filtered = [row for row in rows if row[2] not in ignore_transaction_types]

    # Keep specified columns
    for row in rows_filtered:
        row[:] = [row[index - 1] for index in columns_to_keep]

    # Get the directory of the input file
    output_folder = os.path.dirname(input_file)
    output_file_path = os.path.join(output_folder, output_file)

    with open(output_file_path, 'w', newline='', encoding='utf-8-sig') as outfile:
        writer = csv.writer(outfile, delimiter=delimiter)
        writer.writerows(rows_filtered)

def select_file():
    root = tk.Tk()
    root.withdraw()  # Hide the main window

    file_path = filedialog.askopenfilename(filetypes=[("CSV files", "*.csv")])
    if file_path:
        return file_path
    else:
        print("No file selected.")
        return None

def load_config(config_file):
    default_config = {
        "columns_to_keep": [1, 3, 5, 6, 10, 11, 13, 14, 15, 33],
        "delimiter": ";",
        "encoding": "cp1250",
        "ignore_transaction_types": [
            "Netransakční poplatek",
            "Platba kartou"
        ]
    }
    if os.path.exists(config_file):
        with open(config_file, 'r', encoding='utf-8') as file:  # Specify UTF-8 encoding here
            return json.load(file)
    else:
        with open(config_file, 'w') as file:
            json.dump(default_config, file, indent=4)
        return default_config

# Get input file path from user
input_file_path = select_file()
if input_file_path:
    # Load configuration from config file
    config_file_path = os.path.join(os.path.dirname(__file__), 'config.json')
    config = load_config(config_file_path)

    # Define output file name
    output_file_name = 'output.csv'

    # Process the file and save the modified data
    keep_columns(
        input_file_path,
        output_file_name,
        config['columns_to_keep'],
        delimiter=config['delimiter'],
        encoding=config['encoding'],
        ignore_transaction_types=config['ignore_transaction_types']
    )

    print("Columns kept successfully. Output saved to 'output.csv' in the same folder as the selected file.")
