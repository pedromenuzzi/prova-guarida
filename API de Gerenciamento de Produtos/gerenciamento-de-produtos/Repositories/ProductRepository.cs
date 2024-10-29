using System.Data;
using Dapper;
using ProductCatalogAPI.Models;

namespace ProductCatalogAPI.Repositories
{
    public class ProductRepository
    {
        private readonly IDbConnection _dbConnection;

        public ProductRepository(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
            InitializeDatabase();
        }

        private void InitializeDatabase()
        {
            var createTableQuery = @"
                CREATE TABLE IF NOT EXISTS Products (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    Name TEXT NOT NULL,
                    Price REAL NOT NULL
                );";
            _dbConnection.Execute(createTableQuery);
        }

        public async Task<IEnumerable<Product>> GetAllAsync() => 
            await _dbConnection.QueryAsync<Product>("SELECT * FROM Products");

        public async Task<Product> GetByIdAsync(int id) => 
            await _dbConnection.QuerySingleOrDefaultAsync<Product>("SELECT * FROM Products WHERE Id = @Id", new { Id = id });

        public async Task<int> CreateAsync(Product product) => 
            await _dbConnection.ExecuteScalarAsync<int>("INSERT INTO Products (Name, Price) VALUES (@Name, @Price); SELECT last_insert_rowid()", product);

        public async Task UpdateAsync(Product product) => 
            await _dbConnection.ExecuteAsync("UPDATE Products SET Name = @Name, Price = @Price WHERE Id = @Id", product);

        public async Task DeleteAsync(int id) => 
            await _dbConnection.ExecuteAsync("DELETE FROM Products WHERE Id = @Id", new { Id = id });
    }
}