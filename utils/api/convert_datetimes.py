from datetime import datetime

def convert_datetimes(data):
    if isinstance(data, dict):
        return {k: convert_datetimes(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [convert_datetimes(item) for item in data]
    elif isinstance(data, datetime):
        return data.isoformat()  # Convert datetime to ISO 8601 string
    return data