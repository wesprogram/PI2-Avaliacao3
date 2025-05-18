# app/services/import_stocks.py

from sqlalchemy.orm import Session
from app.db.models import Stock
from app.services.extractor import ProductExtractor

def save_stocks(db: Session):
    extractor = ProductExtractor("Stock")
    result = extractor.listall()

    if not result:
        return

    for stock in result.get("stocks", []):
        ticker = stock.get("stock")
        company_name = stock.get("name")
        sector = stock.get("sector") or "Desconhecido"

        if not ticker or not company_name:
            continue

        db_stock = Stock(
            ticker=ticker,
            company_name=company_name,
            sector=sector
        )
        db.add(db_stock)
        print(f"[OK] Ação {ticker} inserida.")

    db.commit()
