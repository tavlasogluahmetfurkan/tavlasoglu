# 🚀 Deployment Guide - Omer Abim Portföy Sitesi

Profesyonel bir şekilde production'a dağıtmanız için adım adım rehber.

---

## 📋 Pre-Deployment Checklist

- [ ] Tüm bağımlılıklar yüklü (`npm install`)
- [ ] Build başarılı (`npm run build` - 0 hata)
- [ ] ESLint kontrolü geçti (`npm run lint`)
- [ ] Tüm links ve resimler çalışıyor
- [ ] Responsive tasarım tüm cihazlarda test edildi
- [ ] Contact formu güvenli (CORS, validation)
- [ ] Metadata ve SEO tags güncellenmiş
- [ ] Environment variables set edilmiş

---

## 🌐 1. Vercel (Recommended - Fastest)

### Adım 1: GitHub'a Push Yapınız
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <github-repo-url>
git push -u origin main
```

### Adım 2: Vercel'e Bağlantı Yapınız
1. [vercel.com](https://vercel.com) adresine gidiniz
2. "New Project" butonuna tıklayınız
3. GitHub repository'nizi seçiniz
4. Vercel otomatik olarak Next.js yapılandırmasını tanır

### Adım 3: Environment Variables (İsteğe bağlı)
```env
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_CONTACT_EMAIL=info@omerabim.com
```

### Adım 4: Deploy!
Vercel otomatik olarak her push'ta deploy eder.

### Faydaları:
✅ Serverless deployment
✅ Automatic SSL
✅ Global CDN
✅ Preview deployments
✅ Analytics included
✅ Free tier available
✅ Custom domain support

---

## 🐳 2. Docker (Self-Hosted)

### Dockerfile Oluşturun
```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy built app from builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

USER nextjs

EXPOSE 3000

ENV HOSTNAME 0.0.0.0
ENV NODE_ENV production

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

CMD ["node_modules/.bin/next", "start"]
```

### Build & Run
```bash
# Build image
docker build -t omerabim-portfolio .

# Run container
docker run -p 3000:3000 --name omerabim omerabim-portfolio

# Stop container
docker stop omerabim
```

### Docker Compose (Production)
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - omerabim-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
    networks:
      - omerabim-network

networks:
  omerabim-network:
```

---

## 🖥️ 3. Traditional Server (Node.js)

### Requirements
- Node.js 18+
- npm/yarn
- PM2 (Process Manager)

### Setup
```bash
# SSH bağlantı kur
ssh user@server-ip

# Repository klonla
git clone <repo-url>
cd omerabim_web

# Bağımlılıkları yükle
npm install --production

# Build et
npm run build

# PM2 yükle (global)
npm install -g pm2

# PM2 ile başlat
pm2 start npm --name "omerabim" -- start

# PM2 startup script
pm2 startup
pm2 save
```

### Nginx Reverse Proxy
```nginx
server {
    listen 80;
    server_name omerabim.com www.omerabim.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name omerabim.com www.omerabim.com;

    # SSL Certificates
    ssl_certificate /etc/letsencrypt/live/omerabim.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/omerabim.com/privkey.pem;

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
    gzip_min_length 1000;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
```

### SSL Certificate (Let's Encrypt)
```bash
# Certbot yükle
sudo apt install certbot python3-certbot-nginx

# Certificate al
sudo certbot certonly --nginx -d omerabim.com -d www.omerabim.com

# Auto-renewal
sudo systemctl enable certbot.timer
```

---

## ☁️ 4. AWS (Elastic Beanstalk)

### AWS CLI Setup
```bash
# AWS CLI yükle
pip install awscli

# Configure
aws configure
```

### .ebextensions Yapılandırması
```yaml
# .ebextensions/node.config
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeVersion: 18
  aws:elasticbeanstalk:container:nodejs:staticfiles:
    /public: /public

commands:
  01_build:
    command: "npm run build"
    leader_only: true
  02_post_create:
    command: "npm ci --production"
```

### Deploy
```bash
# EB CLI yükle
pip install awsebcli

# Initialize
eb init -p node.js-18

# Create environment
eb create omerabim-env

# Deploy
eb deploy

# Monitor
eb logs
```

---

## 🔐 Environment Variables

### Production Environment
```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.omerabim.com
NEXT_PUBLIC_SITE_URL=https://omerabim.com

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=info@omerabim.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS=UA-XXXXXXXXX-X
NEXT_PUBLIC_HOTJAR_ID=1234567

# Security
SESSION_SECRET=your-secret-key-here
CSRF_TOKEN=your-csrf-token
```

### Local .env.local
```env
# Development variables
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

---

## 📊 Monitoring & Maintenance

### Health Checks
```bash
# Website availability
curl https://omerabim.com/healthz

# Performance
curl -I https://omerabim.com
```

### Logging
```bash
# PM2 logs
pm2 logs omerabim

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# System logs
journalctl -xe
```

### Updates
```bash
# Update dependencies
npm update

# Update Node.js
nvm install node
nvm use node

# Rebuild
npm run build
pm2 restart omerabim
```

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port 3000 In Use
```bash
# Kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run start
```

### SSL Certificate Issues
```bash
# Verify certificate
openssl x509 -in /path/to/cert.pem -text -noout

# Renew certificate
certbot renew --force-renewal
```

---

## 📈 Performance Optimization

### Build Size
```bash
# Analyze bundle
npm install -g next-bundle-analyzer
ANALYZE=true npm run build
```

### Caching Strategy
```headers
# .vercel/headers.json
[
  {
    "source": "/public/(.*)",
    "headers": [
      {
        "key": "cache-control",
        "value": "public, max-age=31536000, immutable"
      }
    ]
  }
]
```

### Database Optimization
Eğer veritabanı kullanıyorsanız:
- Connection pooling (PgBouncer)
- Query caching (Redis)
- Index optimization

---

## ✅ Post-Deployment

- [ ] Siteyi test edin (http://omerabim.com)
- [ ] SEO sitemap check: `yoursite.com/sitemap.xml`
- [ ] Google Search Console'a ekleyin
- [ ] Analytics kurulumu (Google Analytics, Hotjar)
- [ ] Monitoring setup et (Sentry, LogRocket)
- [ ] Backup strategy oluşturun
- [ ] SSL certificate otomatik renewal
- [ ] Performance monitoring (Lighthouse)

---

## 🔗 Faydalı Linkler

- [Vercel Docs](https://vercel.com/docs)
- [Docker Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Nginx Config](https://nginx.org/en/docs/)
- [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs)
- [Let's Encrypt](https://letsencrypt.org/)

---

**Başarılı deployments dilerim! 🚀**
