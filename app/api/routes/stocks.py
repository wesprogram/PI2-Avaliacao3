# app/api/routes/stocks.py

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.models import Stock
from app.db.session import get_db

router = APIRouter()

@router.get("/")
def list_stocks(db: Session = Depends(get_db)):
    return db.query(Stock).all()
