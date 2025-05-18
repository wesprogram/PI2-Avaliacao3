from app.db.session import SessionLocal
from app.services.import_stocks import save_stocks
from app.services.import_funds import save_funds
from app.services.import_bonds import save_bdrs

db = SessionLocal()

save_stocks(db)
save_funds(db)
save_bdrs(db)

db.close()
