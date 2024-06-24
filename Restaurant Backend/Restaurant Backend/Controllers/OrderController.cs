using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurant_Backend.Models;

namespace Restaurant_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        FavsDbContext dbContext = new FavsDbContext();

        //api/Order
        [HttpGet()]
        public IActionResult GetAll(string? q = null, bool? orderAgain = null)
        {
            List<Order> result = dbContext.Orders.ToList();

            if (q != null)
            {
                result = result.Where(b => b.Restaurant.ToLower().Contains(q.ToLower())).ToList();
            }
            if (orderAgain != null)
            {
                result = result.Where(b => b.OrderAgain == orderAgain).ToList();
            }

            return Ok(result);
        }

        //api/Order/id
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            Order result = dbContext.Orders.Find(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        //api/Orders/
        [HttpPost()]
        public IActionResult AddOrder([FromBody] Order newOrder)
        {
            newOrder.Id = 0;
            dbContext.Orders.Add(newOrder);
            dbContext.SaveChanges();
            return Created($"/api/Books/{newOrder.Id}", newOrder);

        }
        //api/Orders/{id}
        [HttpDelete("{id}")]

        public IActionResult DeleteOrder(int id)
        {
            Order result = dbContext.Orders.Find(id);
            if (result == null) { return NotFound(); }
            dbContext.Orders.Remove(result);
            dbContext.SaveChanges();
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook([FromBody] Order targetOrder, int id)
        {
            if (targetOrder.Id != id) { return BadRequest(); }
            if (!dbContext.Orders.Any(b => b.Id == id)) { return NotFound(); }
            dbContext.Orders.Update(targetOrder);
            dbContext.SaveChanges();
            return NoContent();
        }
    }
}
