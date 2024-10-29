using Microsoft.AspNetCore.Mvc;
using ProductCatalogAPI.Models;
using ProductCatalogAPI.Repositories;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly ProductRepository _repository;

    public ProductsController(ProductRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var products = await _repository.GetAllAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var product = await _repository.GetByIdAsync(id);
        if (product == null)
            return NotFound();
        return Ok(product);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Product product)
    {
        if (string.IsNullOrEmpty(product.Name) || product.Price <= 0)
            return BadRequest("Nome e preço são obrigatórios.");

        var existingProducts = await _repository.GetAllAsync();
        if (existingProducts.Any(p => p.Name == product.Name))
        {
            return BadRequest("Já existe um produto com esse nome.");
        }
        
        product.Id = await _repository.CreateAsync(product);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Product product)
    {
        var existingProduct = await _repository.GetByIdAsync(id);
        if (existingProduct == null)
            return NotFound();

        product.Id = id;
        await _repository.UpdateAsync(product);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var product = await _repository.GetByIdAsync(id);
        if (product == null)
            return NotFound();

        await _repository.DeleteAsync(id);
        return NoContent();
    }
}