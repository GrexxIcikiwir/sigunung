:root {
    --slate: #1e293b;
    --emerald: #2ecc71;
    --orange: #e67e22;
}

body { margin: 0; font-family: 'Segoe UI', sans-serif; background-color: #f8fafc; color: #334155; }

/* NAV */
.main-nav { background: #fff; height: 75px; display: flex; align-items: center; position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 15px rgba(0,0,0,0.08); }
.nav-container { width: 90%; max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
.logo { font-size: 24px; font-weight: 800; text-decoration: none; color: var(--slate); letter-spacing: -1px; }
.logo span { color: var(--emerald); }
.nav-links { display: flex; list-style: none; gap: 25px; }
.nav-links a { text-decoration: none; color: #64748b; font-weight: 600; font-size: 14px; transition: 0.3s; }
.nav-links a:hover { color: var(--emerald); }

/* HEADER */
header { text-align: center; padding: 70px 20px; background: linear-gradient(rgba(30,41,59,0.9), rgba(30,41,59,0.9)), url('https://images.unsplash.com/photo-1585435421671-0c16764628ce?auto=format&fit=crop&w=1350&q=80'); background-size: cover; color: white; }
#searchInput { width: 100%; max-width: 450px; padding: 15px 25px; border-radius: 30px; border: none; margin-top: 25px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }

/* GRID 2 KOLOM */
.container { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; width: 90%; max-width: 1000px; margin: 50px auto; }
@media (max-width: 768px) { .container { grid-template-columns: 1fr; } }

/* CARDS */
.card { background: white; border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; border-top: 8px solid; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
.status-buka { border-top-color: var(--emerald); }
.status-peringatan { border-top-color: #f1c40f; }
.card-img { width: 100%; height: 220px; object-fit: cover; }
.card-content { padding: 25px; flex-grow: 1; display: flex; flex-direction: column; }
.mdpl { color: var(--emerald); font-weight: 800; font-size: 14px; letter-spacing: 1px; }
.weather-info { background: #f1f5f9; padding: 12px; border-radius: 12px; margin: 18px 0; font-weight: 700; text-align: center; font-size: 14px; color: #475569; }
.badge { font-weight: 800; padding: 15px; border-radius: 12px; color: white; text-decoration: none; text-align: center; margin-top: auto; }
.status-buka .badge { background: var(--emerald); }
.status-peringatan .badge { background: #f1c40f; }

/* MODALS */
.modal { display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); }
.modal-content { position: relative; background: white; margin: 4% auto; padding: 45px 35px; width: 90%; max-width: 850px; border-radius: 24px; max-height: 85vh; overflow-y: auto; box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
.close-modal { position: absolute; right: 25px; top: 20px; font-size: 38px; cursor: pointer; color: #94a3b8; transition: 0.3s; }
.close-modal:hover { color: #ef4444; transform: rotate(90deg); }

/* DESKRIPSI BOX */
.desc-box { line-height: 1.8; color: #334155; font-size: 16px; text-align: justify; }
.desc-section { background: #f8fafc; padding: 20px; border-radius: 15px; border-left: 6px solid var(--emerald); margin-bottom: 20px; }
.desc-section strong { color: var(--emerald); display: block; margin-bottom: 8px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px; }

.warning-box { background: #fff3cd; color: #856404; padding: 18px; border-radius: 12px; font-weight: bold; text-align: center; margin-bottom: 25px; border: 1px solid #ffeeba; }
.simaksi-item { display: flex; justify-content: space-between; align-items: center; padding: 20px; background: #f1f5f9; margin-bottom: 15px; border-radius: 15px; border-left: 6px solid var(--orange); }
.btn-go { background: var(--orange); color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; }

.list-item-jalur { padding: 20px; background: #f8fafc; margin-bottom: 12px; border-radius: 15px; border-left: 6px solid var(--emerald); cursor: pointer; font-weight: bold; display: flex; align-items: center; transition: 0.3s; }
.list-item-jalur:hover { background: #f1f5f9; transform: translateX(10px); }
.btn-back { padding: 12px 25px; border-radius: 10px; border: none; background: var(--slate); color: white; font-weight: bold; cursor: pointer; transition: 0.3s; }
.btn-back:hover { background: var(--emerald); }
