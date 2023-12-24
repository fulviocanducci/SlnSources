using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
   public class DigimonController : Controller
   {
      public IActionResult Index()
      {
         return View();
      }
   }
}
