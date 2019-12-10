using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MyTest.Models;
namespace MyTest.Controllers
{
    public class CustomerController : Controller
    {
        // GET: Customer
        public ActionResult Index()
        {
            using (MyTestEntities db = new MyTestEntities())
            {
                return View(db.tblCustomers.ToString());
            }
                
        }

        // GET: Customer/Details/5
        public ActionResult Details(int id)
        {
            using (MyTestEntities db = new MyTestEntities())
            {
                return View(db.tblCustomers.Where(c => c.ID == id));
            }
                
        }

        // GET: Customer/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Customer/Create
        [HttpPost]
        public ActionResult Create(tblCustomer customer)
        {
            try
            {
                // TODO: Add insert logic here
                using (MyTestEntities db = new MyTestEntities())
                {
                    db.tblCustomers.Add(customer);
                    db.SaveChanges();
                }
                    return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Customer/Edit/5
        public ActionResult Edit(int id)
        {
            using (MyTestEntities db = new MyTestEntities())
            {
                return View(db.tblCustomers.Where(c => c.ID == id));
            }
        }

        // POST: Customer/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, tblCustomer cust)
        {
            try
            {
                // TODO: Add update logic here
                using (MyTestEntities db = new MyTestEntities())
                {
                    db.Entry(cust).State = System.Data.Entity.EntityState.Modified;
                }
                    return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Customer/Delete/5
        public ActionResult Delete(int id)
        {
            using (MyTestEntities db = new MyTestEntities())
            {
                return View(db.tblCustomers.Where(c => c.ID == id));
            }
        }

        // POST: Customer/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, tblCustomer cust)
        {
            try
            {
                // TODO: Add delete logic here
                using (MyTestEntities db = new MyTestEntities())
                {
                    cust = db.tblCustomers.Where(c => c.ID == id).FirstOrDefault();
                    db.tblCustomers.Remove(cust);
                    db.SaveChanges();
                }
                    return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
