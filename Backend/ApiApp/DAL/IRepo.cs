using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IRepo<T, ID, STRING1, STRING2>
    {
        void AddUser(T u);
        void EditUser(T u);
        void DeleteUser(ID id);
        List<T> GetAllUsers();

        List<T> GetSearchUsers(STRING1 search);

        T GetUser(ID id);

        T GetUserLogin(STRING1 email, STRING2 password);

    }
}