using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DataAccessFactory
    {
        static ApiAppEntities db;
        static DataAccessFactory()
        {
            db = new ApiAppEntities();
        }

        public static IRepo<User, int, string, string> UserDataAcess()
        {
            return new UserRepo(db);
        }


    }
}