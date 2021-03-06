define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/blogs/Deleteitem/:UserId/:ListId",
    "title": "",
    "version": "0.0.1",
    "group": "Deleteitem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId should be passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data deleted successfully\",\n\t    \"status\": 200,\n        \"data\":{\n            n:1,\n            deletedCount:1,\n            ok:1\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in DeleteItem\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "Deleteitem",
    "name": "PostApiV1BlogsDeleteitemUseridListid"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/UpdatePassword",
    "title": "",
    "version": "0.0.1",
    "group": "UpdatePassword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usershortPassword",
            "description": "<p>usershortPassword should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "updatedPassword",
            "description": "<p>updatedPassword should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Password has been updated successfully\",\n\t    \"status\": 200,\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to update password\",\n\t    \"status\": 300,\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "UpdatePassword",
    "name": "PutApiV1BlogsUpdatepassword"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/acceptrequest",
    "title": "",
    "version": "0.0.1",
    "group": "acceptrequest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderName",
            "description": "<p>senderName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderId",
            "description": "<p>senderId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>receiverId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverName",
            "description": "<p>receiverName should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Friend request accepted successfully\",\n\t    \"status\": 200,\n        \"data\":{\n                    firstName:\"string\",\n                    lastName:\"string\",\n                    email:\"string\",\n                    mobileNumber:number,\n                    countrycode:number,\n                    UserId:\"string\",\n                    Password:\"string\",\n                    CreatedOn:\"date\",\n                    _id:\"string\",\n                    __v:\"string\",\n                    friends:\"Array[string]\",\n                    friendRequestRecieved:\"Array[string]\",\n                    friendRequestSent:\"Array[string]\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in updatefriendlistreceiver\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "acceptrequest",
    "name": "PutApiV1BlogsAcceptrequest"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/additems/:UserId/:ListId",
    "title": "",
    "version": "0.0.1",
    "group": "additems",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId should be passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Items added successfully\",\n\t    \"status\": 200,\n        \"data\":{\n            ListId:\"string\",\n            ListName:\"string\",\n            ItemId:\"Array[string]\",\n            ItemName:\"Array[string]\",\n            SubItemId:\"Array[string]\",\n            SubItemName:\"string\",\n            listModifierId:\"string\",\n            listModifierName:\"string\",\n            _id:\"string\",\n            _v:\"string\",\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to add items\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "additems",
    "name": "PutApiV1BlogsAdditemsUseridListid"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/addsubitems/:UserId/:ListId",
    "title": "",
    "version": "0.0.1",
    "group": "addsubitems",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ItemName",
            "description": "<p>ItemName should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Sub-items added successfully\",\n\t    \"status\": 200,\n        \"data\":{\n            ListId:\"string\",\n            ListName:\"string\",\n            ItemId:\"Array[string]\",\n            ItemName:\"Array[string]\",\n            SubItemId:\"Array[string]\",\n            SubItemName:\"string\",\n            listModifierId:\"string\",\n            listModifierName:\"string\",\n            _id:\"string\",\n            _v:\"string\",\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to subadd items\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "addsubitems",
    "name": "PutApiV1BlogsAddsubitemsUseridListid"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/cancelledrequest",
    "title": "",
    "version": "0.0.1",
    "group": "cancelledrequest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderName",
            "description": "<p>senderName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderId",
            "description": "<p>senderId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>receiverId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverName",
            "description": "<p>receiverName should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Friend successfully deleted from friendlist\",\n\t    \"status\": 200,\n        \"data\":{\n                    firstName:\"string\",\n                    lastName:\"string\",\n                    email:\"string\",\n                    mobileNumber:number,\n                    countrycode:number,\n                    UserId:\"string\",\n                    Password:\"string\",\n                    CreatedOn:\"date\",\n                    _id:\"string\",\n                    __v:\"string\",\n                    friends:\"Array[string]\",\n                    friendRequestRecieved:\"Array[string]\",\n                    friendRequestSent:\"Array[string]\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in removefriendrequestsentbysender\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "cancelledrequest",
    "name": "PutApiV1BlogsCancelledrequest"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/createlist/:UserId",
    "title": "",
    "version": "0.0.1",
    "group": "createlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListName",
            "description": "<p>ListName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ItemName",
            "description": "<p>ItemName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubItemName",
            "description": "<p>SubItemName should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"TodoList created successfully\",\n\t    \"status\": 200,\n        \"data\":\n            {\n             ListId:\"string\",\n             ListName:\"string\",\n             ItemId:\"Array[string]\",\n             ItemName:\"Array[string]\",\n             SubItemId:\"Array[string]\",\n             SubItemName:\"string\",\n             listModifierId:\"string\",\n             listModifierName:\"string\",\n             _id:\"string\",\n            _v:\"string\",\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to create TodoList\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "createlist",
    "name": "PostApiV1BlogsCreatelistUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/deletefriendtodolist",
    "title": "",
    "version": "0.0.1",
    "group": "deletefriendtodolist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data deleted successfully\",\n\t    \"status\": 200,\n        \"data\":{\n            n:1,\n            deletedCount:1,\n            ok:1\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Some error occured\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "deletefriendtodolist",
    "name": "PostApiV1BlogsDeletefriendtodolist"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/editfriendtodolist/:UserId/:friendId",
    "title": "",
    "version": "0.0.1",
    "group": "editfriendtodolist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listModifierId",
            "description": "<p>listModifierId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "listModifierName",
            "description": "<p>listModifierName should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data edited successfully\",\n\t    \"status\": 200,\n        \"data\":{\n            n:1,\n            nModified:1,\n            ok:1\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Some error occured\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "editfriendtodolist",
    "name": "PutApiV1BlogsEditfriendtodolistUseridFriendid"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/editlist/:UserId/:ListId",
    "title": "",
    "version": "0.0.1",
    "group": "editlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListName",
            "description": "<p>ListName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ItemId",
            "description": "<p>ItemId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ItemName",
            "description": "<p>ItemName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubItemName",
            "description": "<p>SubItemName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubItemId",
            "description": "<p>SubItemId should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"List edited successfully\",\n\t    \"status\": 200,\n        \"data\":{\n            n:1,\n            nModified:1,\n            ok:1\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured in editList\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "editlist",
    "name": "PutApiV1BlogsEditlistUseridListid"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/forgotpassword",
    "title": "",
    "version": "0.0.1",
    "group": "forgotpassword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Email sent for reset password\",\n\t    \"status\": 200,\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Please enter email\",\n\t    \"status\": 300,\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "forgotpassword",
    "name": "PutApiV1BlogsForgotpassword"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/friendlist/:UserId",
    "title": "",
    "version": "0.0.1",
    "group": "friendlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data fecthed successfully\",\n\t    \"status\": 200,\n        \"data\":{\n                friends:Array[\"string\"],\n                _id:\"string\",\n                _v:\"string\",\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to fetch data\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "friendlist",
    "name": "GetApiV1BlogsFriendlistUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/friendusersingletodolist",
    "title": "",
    "version": "0.0.1",
    "group": "friendusersingletodolist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data fetched successfully\",\n\t    \"status\": 200,\n        \"data\":{\n            ListId:\"string\",\n            ListName:\"string\",\n            ItemId:\"Array[string]\",\n            ItemName:\"Array[string]\",\n            SubItemId:\"Array[string]\",\n            SubItemName:\"string\",\n            listModifierId:\"string\",\n            listModifierName:\"string\",\n            _id:\"string\",\n            _v:\"string\",\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Some error occured\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "friendusersingletodolist",
    "name": "PostApiV1BlogsFriendusersingletodolist"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/friendusertodolist",
    "title": "",
    "version": "0.0.1",
    "group": "friendusertodolist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friendId",
            "description": "<p>friendId should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data fetched successfully\",\n\t    \"status\": 200,\n        \"data\":{\n            ListId:\"string\",\n            ListName:\"string\",\n            ItemId:\"Array[string]\",\n            ItemName:\"Array[string]\",\n            SubItemId:\"Array[string]\",\n            SubItemName:\"string\",\n            listModifierId:\"string\",\n            listModifierName:\"string\",\n            _id:\"string\",\n            _v:\"string\",\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Some error occured\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "friendusertodolist",
    "name": "PostApiV1BlogsFriendusertodolist"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/getalllist",
    "title": "",
    "version": "0.0.1",
    "group": "getalllist",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All data fecthed successfully\",\n\t    \"status\": 200,\n        \"data\":\n            {\n             ListId:\"string\",\n             ListName:\"string\",\n             ItemId:\"Array[string]\",\n             ItemName:\"Array[string]\",\n             SubItemId:\"Array[string]\",\n             SubItemName:\"string\",\n             listModifierId:\"string\",\n             listModifierName:\"string\",\n             _id:\"string\",\n            _v:\"string\",\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to fetch allList\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "getalllist",
    "name": "GetApiV1BlogsGetalllist"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/getallusers",
    "title": "",
    "version": "0.0.1",
    "group": "getallusers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data fecthed successfully\",\n\t    \"status\": 200,\n        \"data\":{\n                    firstName:\"string\",\n                    lastName:\"string\",\n                    email:\"string\",\n                    mobileNumber:number,\n                    countrycode:number,\n                    UserId:\"string\",\n                    Password:\"string\",\n                    CreatedOn:\"date\",\n                    _id:\"string\",\n                    __v:\"string\",\n                    friends:\"Array[string]\",\n                    friendRequestRecieved:\"Array[string]\",\n                    friendRequestSent:\"Array[string]\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to fetch data\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "getallusers",
    "name": "GetApiV1BlogsGetallusers"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/getlistbyUserIdlistId/:UserId/:ListId",
    "title": "",
    "version": "0.0.1",
    "group": "getlistbyUserIdlistId",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId should be passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data fecthed successfully\",\n\t    \"status\": 200,\n        \"data\":\n            {\n             ListId:\"string\",\n             ListName:\"string\",\n             ItemId:\"Array[string]\",\n             ItemName:\"Array[string]\",\n             SubItemId:\"Array[string]\",\n             SubItemName:\"string\",\n             listModifierId:\"string\",\n             listModifierName:\"string\",\n             _id:\"string\",\n            _v:\"string\",\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to fetch allList\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "getlistbyUserIdlistId",
    "name": "GetApiV1BlogsGetlistbyuseridlistidUseridListid"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/getlistbyuserid/:UserId",
    "title": "",
    "version": "0.0.1",
    "group": "getlistbyuserid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data fecthed successfully\",\n\t    \"status\": 200,\n        \"data\":\n            {\n             ListId:\"string\",\n             ListName:\"string\",\n             ItemId:\"Array[string]\",\n             ItemName:\"Array[string]\",\n             SubItemId:\"Array[string]\",\n             SubItemName:\"string\",\n             listModifierId:\"string\",\n             listModifierName:\"string\",\n             _id:\"string\",\n            _v:\"string\",\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to fetch allList\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "getlistbyuserid",
    "name": "GetApiV1BlogsGetlistbyuseridUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/login",
    "title": "",
    "version": "0.0.1",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"You are Login\",\n\t    \"status\": 200,\n        \"data\":\n            {\n                authToken:\"string\",\n                userdetails:\n                {\n                    firstName:\"string\",\n                    lastName:\"string\",\n                    email:\"string\",\n                    mobileNumber:number,\n                    countrycode:number,\n                    UserId:\"string\",\n                    Password:\"string\",\n                    CreatedOn:\"date\",\n                    _id:\"string\",\n                    __v:\"string\",\n                    friends:\"Array[string]\",\n                    friendRequestRecieved:\"Array[string]\",\n                    friendRequestSent:\"Array[string]\"\n                }\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to generate token\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "login",
    "name": "PostApiV1BlogsLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/logout",
    "title": "",
    "version": "0.0.1",
    "group": "logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User successfully loggedout\",\n\t    \"status\": 200,\n\t    \"data\":{\n            n:1,\n            ok:1,\n            deletedCount:1\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to logout\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "logout",
    "name": "PostApiV1BlogsLogout"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/rejectrequest",
    "title": "",
    "version": "0.0.1",
    "group": "rejectrequest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderName",
            "description": "<p>senderName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderId",
            "description": "<p>senderId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>receiverId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverName",
            "description": "<p>receiverName should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Friend request successfully rejected\",\n\t    \"status\": 200,\n        \"data\":{\n                    firstName:\"string\",\n                    lastName:\"string\",\n                    email:\"string\",\n                    mobileNumber:number,\n                    countrycode:number,\n                    UserId:\"string\",\n                    Password:\"string\",\n                    CreatedOn:\"date\",\n                    _id:\"string\",\n                    __v:\"string\",\n                    friends:\"Array[string]\",\n                    friendRequestRecieved:\"Array[string]\",\n                    friendRequestSent:\"Array[string]\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in removefriendfromsender\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "rejectrequest",
    "name": "PutApiV1BlogsRejectrequest"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/requestreceived/:UserId",
    "title": "",
    "version": "0.0.1",
    "group": "requestreceived",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data fecthed successfully\",\n\t    \"status\": 200,\n        \"data\":{\n                friendRequestRecieved:Array[\"string\"],\n                _id:\"string\",\n                _v:\"string\",\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to fetch data\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "requestreceived",
    "name": "GetApiV1BlogsRequestreceivedUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/blogs/requestsent/:UserId",
    "title": "",
    "version": "0.0.1",
    "group": "requestsent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId should be passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Data fecthed successfully\",\n\t    \"status\": 200,\n        \"data\":{\n                friendRequestSent:Array[\"string\"],\n                _id:\"string\",\n                _v:\"string\",\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Unable to fetch data\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "requestsent",
    "name": "GetApiV1BlogsRequestsentUserid"
  },
  {
    "type": "put",
    "url": "/api/v1/blogs/sentrequest",
    "title": "",
    "version": "0.0.1",
    "group": "sentrequest",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderName",
            "description": "<p>senderName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senderId",
            "description": "<p>senderId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>receiverId should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverName",
            "description": "<p>receiverName should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Friend request sent successfully\",\n\t    \"status\": 200,\n        \"data\":{\n                    firstName:\"string\",\n                    lastName:\"string\",\n                    email:\"string\",\n                    mobileNumber:number,\n                    countrycode:number,\n                    UserId:\"string\",\n                    Password:\"string\",\n                    CreatedOn:\"date\",\n                    _id:\"string\",\n                    __v:\"string\",\n                    friends:\"Array[string]\",\n                    friendRequestRecieved:\"Array[string]\",\n                    friendRequestSent:\"Array[string]\"\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error in requestbysender\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "sentrequest",
    "name": "PutApiV1BlogsSentrequest"
  },
  {
    "type": "post",
    "url": "/api/v1/blogs/signup",
    "title": "",
    "version": "0.0.1",
    "group": "signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countrycode",
            "description": "<p>countrycode should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName should be passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber should be passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tUserId: \"string\",\n\t\t\t\t\t\temail: \"string\",\n\t\t\t\t\t\tPassword: \"Password\",\n\t\t\t\t\t\tcountrycode: number,\n\t\t\t\t\t\tfirstName: \"string\",\n\t\t\t\t\t\tlastName: \"string\",\n\t\t\t\t\t\tmobileNumber: number,\n\t\t\t\t\t\tCreatedOn: \"date\",\n                        friends:\"Array[string]\",\n                        friendRequestRecieved:\"Array[string]\",\n                        friendRequestSent:\"Array[string]\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error during signup\",\n\t    \"status\": 300,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routeFolder/route.js",
    "groupTitle": "signup",
    "name": "PostApiV1BlogsSignup"
  }
] });
