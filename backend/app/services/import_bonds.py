# app/services/import_bdrs.py

from sqlalchemy.orm import Session
from app.db.models import Stock
from app.services.extractor import ProductExtractor

def save_bdrs(db: Session):
    extractor = ProductExtractor("BDR")
    result = extractor.listall()

    if not result:
        return

    for bdr in result.get("stocks", []):
        ticker = bdr.get("stock")
        company_name = bdr.get("name")
        sector = bdr.get("sector") or "Desconhecido"

        if not ticker or not company_name:
            continue

        db_stock = Stock(
            ticker=ticker,
            company_name=company_name,
            sector=sector
        )
        db.add(db_stock)
        print(f"[OK] BDR {ticker} inserida.")

    db.commit()
