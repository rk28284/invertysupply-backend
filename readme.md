# 📦 Inventory Management API

A robust **Node.js / Express / Mongoose** backend designed for high-performance tracking of supplier stock and inventory analytics.

# Why NoSQL (MongoDB)?
I chose NoSQL because it offers high flexibility for horizontal scaling and rapid schema evolution. Storing data as BSON (Binary JSON) aligns perfectly with our JavaScript-driven stack, making data retrieval .

# Optimization Tip
Indexing: By implementing a Single Field Index on `supplier_id`, the database avoids expensive "Collection Scans." This allows for $O(1)$ or $O(\log n)$ lookup times, ensuring queries remain instant even as the inventory scales to millions of records.




