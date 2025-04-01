# API Reference

## Overview

This document provides a comprehensive reference for the APIs available in the project. Each API endpoint is described in detail, including its purpose, parameters, return types, and usage examples.

## API Endpoints

### 1. `GET /api/resource`

#### Description
Fetches a list of resources.

#### Parameters
- `page` (optional): The page number for pagination.
- `limit` (optional): The number of resources to return per page.

#### Returns
- `200 OK`: A JSON array of resources.
- `404 Not Found`: If no resources are found.

#### Example
```javascript
fetch('/api/resource?page=1&limit=10')
  .then(response => response.json())
  .then(data => console.log(data));
```

### 2. `POST /api/resource`

#### Description
Creates a new resource.

#### Parameters
- `name` (required): The name of the resource.
- `description` (optional): A description of the resource.

#### Returns
- `201 Created`: The created resource.
- `400 Bad Request`: If the request is invalid.

#### Example
```javascript
fetch('/api/resource', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'New Resource',
    description: 'This is a new resource.'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

### 3. `DELETE /api/resource/:id`

#### Description
Deletes a resource by ID.

#### Parameters
- `id` (required): The ID of the resource to delete.

#### Returns
- `204 No Content`: If the resource was successfully deleted.
- `404 Not Found`: If the resource does not exist.

#### Example
```javascript
fetch('/api/resource/123', {
  method: 'DELETE'
})
.then(response => {
  if (response.status === 204) {
    console.log('Resource deleted successfully.');
  }
});
```

## Conclusion

This API reference serves as a guide for developers to understand how to interact with the project's APIs effectively. For further assistance, please refer to the [Getting Started Guide](../guide/getting-started.md).