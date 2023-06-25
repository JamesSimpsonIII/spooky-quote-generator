import pandas as pd
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("SpookyInfrastructureStack-SpookyQuotes843DAC00-15J1A7AGV7ZES")


df = pd.read_csv("spooky-quotes.csv")

for index, row in df.iterrows():
    ID = row["ID"]
    Quote = row["Quote"]
    # Perform desired operations with ID and Quote
    table.put_item(
        Item={
            "id": ID,
            "quote": Quote
        }
    )


response = table.get_item(
    Key={
        "id": 3
    }
)
print(response["Item"]['quote'])
print(type(response["Item"]['quote']))