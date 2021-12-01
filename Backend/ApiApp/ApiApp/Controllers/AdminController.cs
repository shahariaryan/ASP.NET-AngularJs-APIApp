using BEL;
using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace APIApp.Controllers
{
    public class AdminController : ApiController
    {
        //USERS
        [Route("api/users/all")]
        [HttpGet]
        public List<UserModel> GetAllUsers()
        {
            return UserService.GetAllUsers();
        }

        [Route("api/users/search/{search}")]
        [HttpGet]
        public List<UserModel> GetSearchUsers(string search)
        {
            return UserService.GetSearchUsers(search);
        }

        [Route("api/users/{id}")]
        [HttpGet]
        public UserModel GetUser(int id)
        {
            return UserService.GetUser(id);
        }

        [Route("api/users/add")]
        [HttpPost]
        public void AddUser(UserModel user)
        {
            user.usertype = "Manager";
            user.createdat = DateTime.Now;
            UserService.AddUser(user);
        }

        [Route("api/users/edit")]
        [HttpPut]
        public void EditUser(UserModel user)
        {
            UserService.EditUser(user);
        }

        [Route("api/users/delete/{id}")]
        [HttpDelete]
        public void DeleteUser(int id)
        {
            UserService.DeleteUser(id);
        }
    }
}