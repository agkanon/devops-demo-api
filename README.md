# DevOps Demo API

A complete, production-ready DevOps demonstration project featuring containerization, CI/CD, traffic management, observability, and zero-downtime deployment.

### Features
- Node.js REST API with GET `/status` and POST `/data`
- Docker multi-stage builds
- Prometheus metrics + Grafana dashboard
- Kubernetes manifests with **Ingress** as main entry point
- Horizontal scaling (handles 100+ requests/sec easily)
- Zero-downtime deployment

---

## Quick Start (Docker Compose)

```bash
git clone https://github.com/yourusername/devops-demo-api.git
cd devops-demo-api
docker compose up --build -d



Service,URL,Description
API,http://localhost:8080,Main API
Metrics,http://localhost:8080/metrics,Prometheus metrics
Prometheus,http://localhost:9090,Prometheus UI
Grafana,http://localhost:3001,Grafana (admin/admin)
