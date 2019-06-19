const express=require('express');
const controlFile=require('./../controlFolder/control');
const configFile=require('./../configFolder/config');
const controlfriendFile=require('./../controlFolder/friendcontroller');
const controlfriendtodolistFile=require('./../controlFolder/friendtodolist');
const auth=require('./../MiddleWare/Authentication');
let baseurl=configFile.apiversion;

let setRouter=(app)=>{
app.get(baseurl+'/route/:Name',controlFile.route);
app.post(baseurl+'/body',controlFile.body);

app.post(baseurl+'/signup',controlFile.signupfunction);

	/**
	 * @api {post} /api/v1/blogs/signup
	 * @apiVersion 0.0.1
	 * @apiGroup signup
	 *
	 * @apiParam {String} email email should be passed as a body parameter
	 * @apiParam {String} Password Password should be passed as a body parameter
	 * @apiParam {String} countrycode countrycode should be passed as a body parameter
	 * @apiParam {String} firstName firstName should be passed as a body parameter
     * @apiParam {String} lastName lastName should be passed as a body parameter
     * @apiParam {String} mobileNumber mobileNumber should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "User created successfully",
	    "status": 200,
	    "data": [
					{
						UserId: "string",
						email: "string",
						Password: "Password",
						countrycode: number,
						firstName: "string",
						lastName: "string",
						mobileNumber: number,
						CreatedOn: "date",
                        friends:"Array[string]",
                        friendRequestRecieved:"Array[string]",
                        friendRequestSent:"Array[string]"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error during signup",
	    "status": 300,
	    "data": null
	   }
	 */

app.post(baseurl+'/login',controlFile.Loginfunction);

	/**
	 * @api {post} /api/v1/blogs/login
	 * @apiVersion 0.0.1
	 * @apiGroup login
	 *
	 * @apiParam {String} email email should be passed as a body parameter
	 * @apiParam {String} Password Password should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "You are Login",
	    "status": 200,
        "data":
            {
                authToken:"string",
                userdetails:
                {
                    firstName:"string",
                    lastName:"string",
                    email:"string",
                    mobileNumber:number,
                    countrycode:number,
                    UserId:"string",
                    Password:"string",
                    CreatedOn:"date",
                    _id:"string",
                    __v:"string",
                    friends:"Array[string]",
                    friendRequestRecieved:"Array[string]",
                    friendRequestSent:"Array[string]"
                }
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to generate token",
	    "status": 300,
	    "data": null
	   }
	 */

app.post(baseurl+'/logout',controlFile.logoutfunction);

	/**
	 * @api {post} /api/v1/blogs/logout
	 * @apiVersion 0.0.1
	 * @apiGroup logout
	 *
	 * @apiParam {String} UserId UserId should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "User successfully loggedout",
	    "status": 200,
	    "data":{
            n:1,
            ok:1,
            deletedCount:1
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to logout",
	    "status": 300,
	    "data": null
	   }
	 */


app.put(baseurl+'/forgotpassword',controlFile.forgotPassword);

	/**
	 * @api {put} /api/v1/blogs/forgotpassword
	 * @apiVersion 0.0.1
	 * @apiGroup forgotpassword
	 *
	 * @apiParam {String} email email should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Email sent for reset password",
	    "status": 200,
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Please enter email",
	    "status": 300,
	   }
	 */

app.put(baseurl+'/UpdatePassword',controlFile.UpdatePassword);

	/**
	 * @api {put} /api/v1/blogs/UpdatePassword
	 * @apiVersion 0.0.1
	 * @apiGroup UpdatePassword
	 *
	 * @apiParam {String} email email should be passed as a body parameter
     * @apiParam {String} usershortPassword usershortPassword should be passed as a body parameter
     * @apiParam {String} updatedPassword updatedPassword should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Password has been updated successfully",
	    "status": 200,
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to update password",
	    "status": 300,
	   }
	 */

app.post(baseurl+'/createlist/:UserId',auth.isAuthorized,controlFile.createTodoList);

	/**
	 * @api {post} /api/v1/blogs/createlist/:UserId
	 * @apiVersion 0.0.1
	 * @apiGroup createlist
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} UserId UserId should be passed as a URL parameter
	 * @apiParam {String} ListName ListName should be passed as a body parameter
     * @apiParam {String} ItemName ItemName should be passed as a body parameter
     * @apiParam {String} SubItemName SubItemName should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "TodoList created successfully",
	    "status": 200,
        "data":
            {
             ListId:"string",
             ListName:"string",
             ItemId:"Array[string]",
             ItemName:"Array[string]",
             SubItemId:"Array[string]",
             SubItemName:"string",
             listModifierId:"string",
             listModifierName:"string",
             _id:"string",
            _v:"string",
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to create TodoList",
	    "status": 300,
	    "data": null
	   }
	 */

app.get(baseurl+'/getalllist',controlFile.getallLists);

	/**
	 * @api {get} /api/v1/blogs/getalllist
	 * @apiVersion 0.0.1
	 * @apiGroup getalllist
	 *
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All data fecthed successfully",
	    "status": 200,
        "data":
            {
             ListId:"string",
             ListName:"string",
             ItemId:"Array[string]",
             ItemName:"Array[string]",
             SubItemId:"Array[string]",
             SubItemName:"string",
             listModifierId:"string",
             listModifierName:"string",
             _id:"string",
            _v:"string",
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to fetch allList",
	    "status": 300,
	    "data": null
	   }
	 */
app.get(baseurl+'/getlistbyUserIdlistId/:UserId/:ListId',controlFile.getlistbyUserIdlistId);

	/**
	 * @api {get} /api/v1/blogs/getlistbyUserIdlistId/:UserId/:ListId
	 * @apiVersion 0.0.1
	 * @apiGroup getlistbyUserIdlistId
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} UserId UserId should be passed as a URL parameter
	 * @apiParam {String} ListId ListId should be passed as a URL parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data fecthed successfully",
	    "status": 200,
        "data":
            {
             ListId:"string",
             ListName:"string",
             ItemId:"Array[string]",
             ItemName:"Array[string]",
             SubItemId:"Array[string]",
             SubItemName:"string",
             listModifierId:"string",
             listModifierName:"string",
             _id:"string",
            _v:"string",
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to fetch allList",
	    "status": 300,
	    "data": null
	   }
	 */

app.get(baseurl+'/getlistbyuserid/:UserId',auth.isAuthorized,controlFile.getlistbyUserId);

	/**
	 * @api {get} /api/v1/blogs/getlistbyuserid/:UserId
	 * @apiVersion 0.0.1
	 * @apiGroup getlistbyuserid
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} UserId UserId should be passed as a URL parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data fecthed successfully",
	    "status": 200,
        "data":
            {
             ListId:"string",
             ListName:"string",
             ItemId:"Array[string]",
             ItemName:"Array[string]",
             SubItemId:"Array[string]",
             SubItemName:"string",
             listModifierId:"string",
             listModifierName:"string",
             _id:"string",
            _v:"string",
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to fetch allList",
	    "status": 300,
	    "data": null
	   }
	 */
app.put(baseurl+'/editlist/:UserId/:ListId',auth.isAuthorized,controlFile.EditList);

	/**
	 * @api {put} /api/v1/blogs/editlist/:UserId/:ListId
	 * @apiVersion 0.0.1
	 * @apiGroup editlist
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} UserId UserId should be passed as a URL parameter
     * @apiParam {String} ListId ListId should be passed as a URL parameter
     * @apiParam {String} ListName ListName should be passed as a body parameter
     * @apiParam {String} ItemId ItemId should be passed as a body parameter
     * @apiParam {String} ItemName ItemName should be passed as a body parameter
     * @apiParam {String} SubItemName SubItemName should be passed as a body parameter
     * @apiParam {String} SubItemId SubItemId should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "List edited successfully",
	    "status": 200,
        "data":{
            n:1,
            nModified:1,
            ok:1
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured in editList",
	    "status": 300,
	    "data": null
	   }
	 */
app.post(baseurl+'/Deleteitem/:UserId/:ListId',auth.isAuthorized,controlFile.DeleteItem);

	/**
	 * @api {post} /api/v1/blogs/Deleteitem/:UserId/:ListId
	 * @apiVersion 0.0.1
	 * @apiGroup Deleteitem
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} UserId UserId should be passed as a URL parameter
     * @apiParam {String} ListId ListId should be passed as a URL parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data deleted successfully",
	    "status": 200,
        "data":{
            n:1,
            deletedCount:1,
            ok:1
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in DeleteItem",
	    "status": 300,
	    "data": null
	   }
	 */

app.put(baseurl+'/additems/:UserId/:ListId',auth.isAuthorized,controlFile.addItems);

	/**
	 * @api {put} /api/v1/blogs/additems/:UserId/:ListId
	 * @apiVersion 0.0.1
	 * @apiGroup additems
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} UserId UserId should be passed as a URL parameter
     * @apiParam {String} ListId ListId should be passed as a URL parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Items added successfully",
	    "status": 200,
        "data":{
            ListId:"string",
            ListName:"string",
            ItemId:"Array[string]",
            ItemName:"Array[string]",
            SubItemId:"Array[string]",
            SubItemName:"string",
            listModifierId:"string",
            listModifierName:"string",
            _id:"string",
            _v:"string",
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to add items",
	    "status": 300,
	    "data": null
	   }
	 */
app.put(baseurl+'/addsubitems/:UserId/:ListId',auth.isAuthorized,controlFile.addsubItems);

	/**
	 * @api {put} /api/v1/blogs/addsubitems/:UserId/:ListId
	 * @apiVersion 0.0.1
	 * @apiGroup addsubitems
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} UserId UserId should be passed as a URL parameter
     * @apiParam {String} ListId ListId should be passed as a URL parameter
     * @apiParam {String} ItemName ItemName should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Sub-items added successfully",
	    "status": 200,
        "data":{
            ListId:"string",
            ListName:"string",
            ItemId:"Array[string]",
            ItemName:"Array[string]",
            SubItemId:"Array[string]",
            SubItemName:"string",
            listModifierId:"string",
            listModifierName:"string",
            _id:"string",
            _v:"string",
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to subadd items",
	    "status": 300,
	    "data": null
	   }
	 */

app.get(baseurl+'/getallusers',auth.isAuthorized,controlfriendFile.getallusers);

	/**
	 * @api {get} /api/v1/blogs/getallusers
	 * @apiVersion 0.0.1
	 * @apiGroup getallusers
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data fecthed successfully",
	    "status": 200,
        "data":{
                    firstName:"string",
                    lastName:"string",
                    email:"string",
                    mobileNumber:number,
                    countrycode:number,
                    UserId:"string",
                    Password:"string",
                    CreatedOn:"date",
                    _id:"string",
                    __v:"string",
                    friends:"Array[string]",
                    friendRequestRecieved:"Array[string]",
                    friendRequestSent:"Array[string]"
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to fetch data",
	    "status": 300,
	    "data": null
	   }
	 */

app.get(baseurl+'/requestsent/:UserId',auth.isAuthorized,controlfriendFile.requestsent);

	/**
	 * @api {get} /api/v1/blogs/requestsent/:UserId
	 * @apiVersion 0.0.1
	 * @apiGroup requestsent
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} UserId UserId should be passed as a URL parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data fecthed successfully",
	    "status": 200,
        "data":{
                friendRequestSent:Array["string"],
                _id:"string",
                _v:"string",
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to fetch data",
	    "status": 300,
	    "data": null
	   }
	 */

app.get(baseurl+'/requestreceived/:UserId',auth.isAuthorized,controlfriendFile.requestreceived);

	/**
	 * @api {get} /api/v1/blogs/requestreceived/:UserId
	 * @apiVersion 0.0.1
	 * @apiGroup requestreceived
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} UserId UserId should be passed as a URL parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data fecthed successfully",
	    "status": 200,
        "data":{
                friendRequestRecieved:Array["string"],
                _id:"string",
                _v:"string",
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to fetch data",
	    "status": 300,
	    "data": null
	   }
	 */

app.get(baseurl+'/friendlist/:UserId',auth.isAuthorized,controlfriendFile.Friendlist);

	/**
	 * @api {get} /api/v1/blogs/friendlist/:UserId
	 * @apiVersion 0.0.1
	 * @apiGroup friendlist
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} UserId UserId should be passed as a URL parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data fecthed successfully",
	    "status": 200,
        "data":{
                friends:Array["string"],
                _id:"string",
                _v:"string",
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Unable to fetch data",
	    "status": 300,
	    "data": null
	   }
	 */

app.put(baseurl+'/sentrequest',auth.isAuthorized,controlfriendFile.sendingfriendrequest);

	/**
	 * @api {put} /api/v1/blogs/sentrequest
	 * @apiVersion 0.0.1
	 * @apiGroup sentrequest
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} senderName senderName should be passed as a body parameter
     * @apiParam {String} senderId senderId should be passed as a body parameter
     * @apiParam {String} receiverId receiverId should be passed as a body parameter
     * @apiParam {String} receiverName receiverName should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Friend request sent successfully",
	    "status": 200,
        "data":{
                    firstName:"string",
                    lastName:"string",
                    email:"string",
                    mobileNumber:number,
                    countrycode:number,
                    UserId:"string",
                    Password:"string",
                    CreatedOn:"date",
                    _id:"string",
                    __v:"string",
                    friends:"Array[string]",
                    friendRequestRecieved:"Array[string]",
                    friendRequestSent:"Array[string]"
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in requestbysender",
	    "status": 300,
	    "data": null
	   }
	 */
    
app.put(baseurl+'/acceptrequest',auth.isAuthorized,controlfriendFile.Acceptingfriendrequest);

	/**
	 * @api {put} /api/v1/blogs/acceptrequest
	 * @apiVersion 0.0.1
	 * @apiGroup acceptrequest
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} senderName senderName should be passed as a body parameter
     * @apiParam {String} senderId senderId should be passed as a body parameter
     * @apiParam {String} receiverId receiverId should be passed as a body parameter
     * @apiParam {String} receiverName receiverName should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Friend request accepted successfully",
	    "status": 200,
        "data":{
                    firstName:"string",
                    lastName:"string",
                    email:"string",
                    mobileNumber:number,
                    countrycode:number,
                    UserId:"string",
                    Password:"string",
                    CreatedOn:"date",
                    _id:"string",
                    __v:"string",
                    friends:"Array[string]",
                    friendRequestRecieved:"Array[string]",
                    friendRequestSent:"Array[string]"
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in updatefriendlistreceiver",
	    "status": 300,
	    "data": null
	   }
	 */


app.put(baseurl+'/rejectrequest',auth.isAuthorized,controlfriendFile.Rejectfriendrequest);

	/**
	 * @api {put} /api/v1/blogs/rejectrequest
	 * @apiVersion 0.0.1
	 * @apiGroup rejectrequest
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} senderName senderName should be passed as a body parameter
     * @apiParam {String} senderId senderId should be passed as a body parameter
     * @apiParam {String} receiverId receiverId should be passed as a body parameter
     * @apiParam {String} receiverName receiverName should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Friend request successfully rejected",
	    "status": 200,
        "data":{
                    firstName:"string",
                    lastName:"string",
                    email:"string",
                    mobileNumber:number,
                    countrycode:number,
                    UserId:"string",
                    Password:"string",
                    CreatedOn:"date",
                    _id:"string",
                    __v:"string",
                    friends:"Array[string]",
                    friendRequestRecieved:"Array[string]",
                    friendRequestSent:"Array[string]"
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in removefriendfromsender",
	    "status": 300,
	    "data": null
	   }
	 */

app.put(baseurl+'/cancelledrequest',auth.isAuthorized,controlfriendFile.unfriendfromfriendlist);

	/**
	 * @api {put} /api/v1/blogs/cancelledrequest
	 * @apiVersion 0.0.1
	 * @apiGroup cancelledrequest
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} senderName senderName should be passed as a body parameter
     * @apiParam {String} senderId senderId should be passed as a body parameter
     * @apiParam {String} receiverId receiverId should be passed as a body parameter
     * @apiParam {String} receiverName receiverName should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Friend successfully deleted from friendlist",
	    "status": 200,
        "data":{
                    firstName:"string",
                    lastName:"string",
                    email:"string",
                    mobileNumber:number,
                    countrycode:number,
                    UserId:"string",
                    Password:"string",
                    CreatedOn:"date",
                    _id:"string",
                    __v:"string",
                    friends:"Array[string]",
                    friendRequestRecieved:"Array[string]",
                    friendRequestSent:"Array[string]"
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error in removefriendrequestsentbysender",
	    "status": 300,
	    "data": null
	   }
	 */

app.post(baseurl+'/friendusertodolist',auth.isAuthorized,controlfriendtodolistFile.getusertodolist);

	/**
	 * @api {post} /api/v1/blogs/friendusertodolist
	 * @apiVersion 0.0.1
	 * @apiGroup friendusertodolist
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} UserId UserId should be passed as a body parameter
     * @apiParam {String} friendId friendId should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data fetched successfully",
	    "status": 200,
        "data":{
            ListId:"string",
            ListName:"string",
            ItemId:"Array[string]",
            ItemName:"Array[string]",
            SubItemId:"Array[string]",
            SubItemName:"string",
            listModifierId:"string",
            listModifierName:"string",
            _id:"string",
            _v:"string",
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Some error occured",
	    "status": 300,
	    "data": null
	   }
	 */

app.post(baseurl+'/friendusersingletodolist',auth.isAuthorized,controlfriendtodolistFile.singleviewtodolist);

	/**
	 * @api {post} /api/v1/blogs/friendusersingletodolist
	 * @apiVersion 0.0.1
	 * @apiGroup friendusersingletodolist
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} UserId UserId should be passed as a body parameter
     * @apiParam {String} friendId friendId should be passed as a body parameter
     * @apiParam {String} ListId ListId should be passed as a body parameter
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data fetched successfully",
	    "status": 200,
        "data":{
            ListId:"string",
            ListName:"string",
            ItemId:"Array[string]",
            ItemName:"Array[string]",
            SubItemId:"Array[string]",
            SubItemName:"string",
            listModifierId:"string",
            listModifierName:"string",
            _id:"string",
            _v:"string",
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Some error occured",
	    "status": 300,
	    "data": null
	   }
	 */

app.put(baseurl+'/editfriendtodolist/:UserId/:friendId',auth.isAuthorized,controlfriendtodolistFile.editfriendlist);

	/**
	 * @api {put} /api/v1/blogs/editfriendtodolist/:UserId/:friendId
	 * @apiVersion 0.0.1
	 * @apiGroup editfriendtodolist
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} UserId UserId should be passed as a URL parameter
     * @apiParam {String} friendId friendId should be passed as a URL parameter
     * @apiParam {String} listModifierId listModifierId should be passed as a body parameter
     * @apiParam {String} listModifierName listModifierName should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data edited successfully",
	    "status": 200,
        "data":{
            n:1,
            nModified:1,
            ok:1
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Some error occured",
	    "status": 300,
	    "data": null
	   }
	 */

app.post(baseurl+'/deletefriendtodolist',auth.isAuthorized,controlfriendtodolistFile.deletefriendtodolist);

	/**
	 * @api {post} /api/v1/blogs/deletefriendtodolist
	 * @apiVersion 0.0.1
	 * @apiGroup deletefriendtodolist
	 *
     * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} UserId UserId should be passed as a body parameter
     * @apiParam {String} friendId friendId should be passed as a body parameter
     * @apiParam {String} ListId ListId should be passed as a body parameter
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Data deleted successfully",
	    "status": 200,
        "data":{
            n:1,
            deletedCount:1,
            ok:1
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Some error occured",
	    "status": 300,
	    "data": null
	   }
	 */

}
module.exports={
    setRouter:setRouter
}