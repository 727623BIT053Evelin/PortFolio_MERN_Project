# Portfolio MERN Project - Deployment Guide

This guide will help you deploy your portfolio project with Vercel (frontend) and Render (backend).

## 🚀 Quick Fix for Contact Form

The contact form requires proper environment variables on both platforms. Follow these steps:

### 1. Configure Render Backend (Already Done ✅)

You've already added these environment variables to Render:
- `EMAIL_USER`: evelin710lin@gmail.com
- `EMAIL_PASS`: Your Gmail App Password
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `NODE_ENV`: production

### 2. Configure Vercel Frontend (ACTION REQUIRED)

**You MUST add this environment variable to Vercel:**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `evelin-portfolio-mern-project`
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://portfolio-mern-project-hly8.onrender.com`
   - **Environment**: Check all (Production, Preview, Development)
5. Click **Save**
6. Go to **Deployments** tab
7. Click the three dots (•••) on the latest deployment → **Redeploy**

### 3. Redeploy Render Backend (ACTION REQUIRED)

After updating `server.js` with the new CORS configuration:

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Fix CORS configuration for Vercel deployment"
   git push origin main
   ```

2. Render will automatically redeploy when it detects the push

**OR** manually redeploy:
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Select your backend service
3. Click **Manual Deploy** → **Deploy latest commit**

---

## 📋 Environment Variables Reference

### Backend (Render)
```env
MONGODB_URI=mongodb+srv://portfolioUsers:QO5SLKLbCLtgofRt@portfolio-cluster.tr2g9lq.mongodb.net/portfolio
PORT=5000
NODE_ENV=production
EMAIL_USER=evelin710lin@gmail.com
EMAIL_PASS=fgirktsgcjhhmsgl
```

### Frontend (Vercel)
```env
VITE_API_URL=https://portfolio-mern-project-hly8.onrender.com
```

---

## 🔍 Troubleshooting Contact Form Errors

### Error: 400 Bad Request

**Common Causes:**
1. **Missing VITE_API_URL on Vercel** - The most common issue
2. **MongoDB connection failure** - Check Render logs
3. **Email authentication failure** - Verify Gmail App Password
4. **CORS issues** - Fixed by the updated server.js

**How to Debug:**

1. **Check Render Backend Logs:**
   - Go to Render Dashboard → Your Service → Logs
   - Look for console messages like:
     - `Contact form submission received:` (request received)
     - `Contact saved to database:` (MongoDB working)
     - `Email sent successfully` (email working)
     - Error messages with details

2. **Check Browser Console:**
   - Open DevTools (F12) on your Vercel site
   - Go to Console tab
   - Look for detailed error messages from axios

3. **Test the Backend Directly:**
   ```bash
   curl -X POST https://portfolio-mern-project-hly8.onrender.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test message"}'
   ```

### Error: 404 Not Found

This usually means:
- The frontend can't find the backend URL
- `VITE_API_URL` is not set on Vercel
- The environment variable was added but you didn't redeploy

**Solution:** Add `VITE_API_URL` to Vercel and redeploy (see step 2 above)

---

## ✅ Verification Steps

After redeploying both services:

1. **Visit your live site:** https://evelin-portfolio-mern-project.vercel.app/
2. **Navigate to Contact page**
3. **Open Browser DevTools** (F12) → Network tab
4. **Fill out the contact form** with test data
5. **Submit the form**

**Expected Results:**
- ✅ Network tab shows POST to `/api/contact` with status **201**
- ✅ Success message appears: "Message sent successfully!"
- ✅ Email received at evelin710lin@gmail.com
- ✅ No errors in browser console

**If Still Failing:**
- Check Render logs for the exact error
- Verify `VITE_API_URL` is set correctly on Vercel
- Ensure you redeployed after adding the environment variable

---

## 🔐 Gmail App Password Setup

If you need to regenerate your Gmail App Password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" and "Other (Custom name)"
5. Enter "Portfolio Backend"
6. Click **Generate**
7. Copy the 16-character password
8. Update `EMAIL_PASS` on Render
9. Redeploy the backend service

---

## 📁 Project URLs

- **Frontend (Vercel):** https://evelin-portfolio-mern-project.vercel.app/
- **Backend (Render):** https://portfolio-mern-project-hly8.onrender.com
- **MongoDB:** MongoDB Atlas (portfolio-cluster)

---

## 🔄 Future Deployments

Whenever you make code changes:

1. **Frontend Changes:**
   ```bash
   cd client
   git add .
   git commit -m "Your message"
   git push origin main
   ```
   Vercel will auto-deploy.

2. **Backend Changes:**
   ```bash
   cd server
   git add .
   git commit -m "Your message"
   git push origin main
   ```
   Render will auto-deploy.

No need to manually redeploy unless you're changing environment variables!
