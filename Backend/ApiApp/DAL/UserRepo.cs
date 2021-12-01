using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    class UserRepo : IRepo<User, int, string, string>
    {

        ApiAppEntities db;
        public UserRepo(ApiAppEntities db)
        {
            this.db = db;
        }

        public void AddUser(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();

        }

        public void DeleteUser(int id)
        {
            var user = db.Users.FirstOrDefault(e => e.userid == id);
            db.Users.Remove(user);
            db.SaveChanges();

        }

        public void EditUser(User u)
        {
            var user = db.Users.FirstOrDefault(e => e.userid == u.userid);
            db.Entry(user).CurrentValues.SetValues(u);
            db.SaveChanges();

        }

        public List<User> GetAllUsers()
        {
            return db.Users.ToList();
        }

        public List<User> GetSearchUsers(string search)
        {
            var list = (from p in db.Users
                        where p.name.Contains(search)
                        select p).ToList();
            return list;
        }

        public User GetUser(int id)
        {
            return db.Users.FirstOrDefault(e => e.userid == id);
        }

        public User GetUserLogin(string email, string password)
        {
            var usercheck = db.Users.FirstOrDefault(e => e.email == email && e.password == password);
            if (usercheck != null)
            {
                return usercheck;
            }
            return null;
        }
    }
}