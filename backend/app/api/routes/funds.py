# app/api/routes/funds.py

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.models import InvestmentFund
from app.db.session import get_db

router = APIRouter()

@router.get("/")
def list_funds(db: Session = Depends(get_db)):
    return db.query(InvestmentFund).all()
