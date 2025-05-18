# app/services/import_funds.py

from sqlalchemy.orm import Session
from app.db.models import InvestmentFund
from app.services.extractor import ProductExtractor

def save_funds(db: Session):
    extractor = ProductExtractor("Fund")
    result = extractor.listall()

    if not result:
        return

    for fund in result.get("funds", []):
        name = fund.get("name")
        cnpj = fund.get("document") or "00.000.000/0000-00"
        category = fund.get("type") or "Desconhecido"
        manager = fund.get("manager") or "Não informado"

        if not name:
            continue

        db_fund = InvestmentFund(
            name=name,
            cnpj=cnpj,
            category=category,
            manager=manager
        )
        db.add(db_fund)
        print(f"[OK] Fundo {name} inserido.")

    db.commit()
