//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Blog
    {
        public int blogid { get; set; }
        public string blog1 { get; set; }
        public int userid { get; set; }
    
        public virtual User User { get; set; }
    }
}
