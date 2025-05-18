# app/api/routes/bonds.py

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.models import GovernmentBond
from app.db.session import get_db

router = APIRouter()

@router.get("/")
def list_bonds(db: Session = Depends(get_db)):
    return db.query(GovernmentBond).all()
