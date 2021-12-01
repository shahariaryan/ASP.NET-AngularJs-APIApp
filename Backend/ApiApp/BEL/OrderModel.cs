using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEL
{
    public class OrderModel
    {
        public int orderid { get; set; }
        public int sellerid { get; set; }
        public int customerid { get; set; }
        public string customerphone { get; set; }
        public string customeraddress { get; set; }
        public int packageid { get; set; }
        public string ordername { get; set; }
        public string paytype { get; set; }
        public string quantity { get; set; }
        public string totalprice { get; set; }
        public System.DateTime createdat { get; set; }
        public string status { get; set; }
    }
}