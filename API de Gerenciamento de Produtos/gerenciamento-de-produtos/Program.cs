using Microsoft.Data.Sqlite;
using ProductCatalogAPI.Repositories;
using System.Data;

var builder = WebApplication.CreateBuilder(args);

var connection = new SqliteConnection("Data Source=:memory:");
connection.Open();
builder.Services.AddSingleton<IDbConnection>(connection);

builder.Services.AddScoped<ProductRepository>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.Run();