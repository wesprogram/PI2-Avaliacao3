from models import Base
from session import engine

def create_tables():
    Base.metadata.create_all(bind=engine)
    print("Tabelas criadas com sucesso.")

if __name__ == "__main__":
    create_tables()
