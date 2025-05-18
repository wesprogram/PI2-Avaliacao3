import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.db.models import Base, Stock 
from app.db.session import SessionLocal
from dotenv import load_dotenv

# Criando um banco de dados de teste em memória
DATABASE_URL = "sqlite:///:memory:"

engine = create_engine(DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Cria as tabelas no banco de teste
Base.metadata.create_all(bind=engine)

# Fixture para obter sessão de teste
@pytest.fixture(scope="function")
def db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

# Teste de inserção
def test_create_stock(db):
    new_stock = Stock(ticker="VALE3", company_name="Vale", sector="Mineração")
    db.add(new_stock)
    db.commit()
    db.refresh(new_stock)

    assert new_stock.id is not None
    assert new_stock.ticker == "VALE3"
