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


# DevOps Demo API

A lightweight, scalable Node.js API built to demonstrate modern DevOps practices with **Docker Compose**, **Kubernetes**, **Prometheus**, and **Grafana**.

Perfect for portfolios, technical interviews, and learning cloud-native application deployment.

---

## 🚀 Access URLs

### Docker Compose
| Service     | URL                        | Description              |
|-------------|----------------------------|--------------------------|
| **API**     | http://localhost:8080     | Main API                 |
| **Metrics** | http://localhost:8080/metrics | Prometheus metrics    |
| **Prometheus** | http://localhost:9090   | Prometheus UI            |
| **Grafana** | http://localhost:3001     | Grafana (admin/admin)    |

### Kubernetes
- **API**: http://api.devops-demo.local (add to your `/etc/hosts`)
- Namespace: `devops-demo`

---

## 🛠️ Deployment

### Kubernetes
```bash
kubectl create namespace devops-demo --dry-run=client -o yaml | kubectl apply -f -
kubectl apply -f k8s/
