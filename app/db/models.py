from sqlite3 import Date
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class InvestmentFund(Base):
    __tablename__ = "investment_funds"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    strategy = Column(String, nullable=True)
    esg_score = Column(Float, nullable=True)


class Stock(Base):
    __tablename__ = "stocks"

    id = Column(Integer, primary_key=True, index=True)
    ticker = Column(String, nullable=False, unique=True)
    company_name = Column(String, nullable=False)
    sector = Column(String)
    esg_score = Column(Float, nullable=True)


class GovernmentBond(Base):
    __tablename__ = "government_bonds"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    maturity_date = Column(String)  # Pode ser Date depois, se quiser
    interest_rate = Column(Float)
    esg_score = Column(Float, nullable=True)

class ESGSource(Base):
    __tablename__ = "esg_sources"

    id = Column(Integer, primary_key=True, index=True)
    source_name = Column(String, nullable=False)
    description = Column(String, nullable=True)

class ESGScoreHistory(Base):
    __tablename__ = "esg_score_history"

    id = Column(Integer, primary_key=True, index=True)
    esg_source_id = Column(Integer, nullable=False)
    product_id = Column(Integer, nullable=False)
    product_type = Column(String, nullable=False)
    date = Column(Date)
    esg_score = Column(Float, nullable=False)