# API Testing

Target: `https://dummyjson.com`

The collection covers Products and Carts using positive, pagination/search, data-shape, and negative tests. DummyJSON simulates write operations; do not treat POST data as persistent production data.

## Run
```bash
newman run Ecommerce_API.postman_collection.json -e DummyJSON.postman_environment.json
```

After real execution, export a Newman HTML/CLI report and place it in this directory if you want to show evidence in your portfolio.
