# app/api/main.py

from fastapi import FastAPI
from app.api.routes import stocks, funds, bonds

app = FastAPI(title="API de Produtos Financeiros")

app.include_router(stocks.router, prefix="/stocks", tags=["Stocks"])
app.include_router(funds.router, prefix="/funds", tags=["Funds"])
app.include_router(bonds.router, prefix="/bonds", tags=["Government Bonds"])
