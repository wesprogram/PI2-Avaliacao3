from db.session import SessionLocal
from db.models import InvestmentFund, Stock, GovernmentBond

def populate_mock_data():
    db = SessionLocal()

    # Fundos de investimento
    fund1 = InvestmentFund(name="Fundo Verde ESG", strategy="Ações Sustentáveis", esg_score=8.4)
    fund2 = InvestmentFund(name="Fundo XP Sustentável", strategy="Renda Fixa ESG", esg_score=7.9)

    # Ações
    stock1 = Stock(ticker="ELET3", company_name="Eletrobras", sector="Energia", esg_score=8.1)
    stock2 = Stock(ticker="B3SA3", company_name="B3", sector="Financeiro", esg_score=6.5)

    # Títulos Públicos
    bond1 = GovernmentBond(name="Tesouro IPCA+ 2035", maturity_date="2035-08-15", interest_rate=5.4, esg_score=5.9)

    db.add_all([fund1, fund2, stock1, stock2, bond1])
    db.commit()
    db.close()
    print("Dados mock inseridos com sucesso.")

if __name__ == "__main__":
    populate_mock_data()
