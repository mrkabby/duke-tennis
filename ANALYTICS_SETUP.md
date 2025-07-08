# Google Analytics Setup Guide for Duke Tennis

## 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter your account name: "Duke Tennis"
5. Choose data sharing settings (recommended to accept all)

## 2. Set Up a Property

1. Property name: "Duke Tennis Website"
2. Reporting time zone: "Ghana Time (GMT+0)"
3. Currency: "Ghanaian Cedi (GHS)"
4. Click "Next"

## 3. Set Up Data Stream

1. Choose "Web" as your platform
2. Website URL: `https://duketennis.org`
3. Stream name: "Duke Tennis Website"
4. Click "Create stream"

## 4. Get Your Tracking ID

After creating the stream, you'll see:
- **Measurement ID**: This is your GA4 tracking ID (format: G-XXXXXXXXXX)
- Copy this ID

## 5. Update Your .env File

Replace the placeholder in your `.env` file:
```
REACT_APP_GA_TRACKING_ID=G-YOUR-ACTUAL-TRACKING-ID
```

## 6. Set Up Google Tag Manager (Optional but Recommended)

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new account: "Duke Tennis"
3. Container name: "duketennis.org"
4. Target platform: "Web"
5. Copy the GTM ID (format: GTM-XXXXXXX)
6. Update your `.env` file:
```
REACT_APP_GTM_ID=GTM-YOUR-ACTUAL-GTM-ID
```

## 7. Set Up Facebook Pixel (Optional)

1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Go to Events Manager
3. Create a new pixel
4. Name: "Duke Tennis Pixel"
5. Copy the Pixel ID
6. Update your `.env` file:
```
REACT_APP_FB_PIXEL_ID=YOUR-ACTUAL-PIXEL-ID
```

## 8. Verify Installation

After updating your `.env` file and deploying:

1. Visit your website
2. Open browser developer tools (F12)
3. Go to Network tab
4. Look for requests to `google-analytics.com` or `googletagmanager.com`
5. Or use Google Analytics Real-time reports to see live traffic

## 9. Additional Setup in Google Analytics

### Enhanced Ecommerce (for booking tracking)
1. Go to Admin → Enhanced ecommerce settings
2. Enable Enhanced Ecommerce Reporting
3. Set up goals for form submissions

### Custom Events to Track
- Tennis lesson bookings
- Contact form submissions
- Phone number clicks
- Email clicks
- Gallery image views
- Resource downloads

### Audience Insights
- Location (focus on Ghana regions)
- Demographics
- Interests
- Behavior flow

## 10. Google Search Console Integration

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://duketennis.org`
3. Verify ownership using Google Analytics
4. Submit your sitemap: `https://duketennis.org/sitemap.xml`

## 11. Monthly SEO Tasks

- Monitor search rankings for tennis coaching keywords
- Check website speed and Core Web Vitals
- Review and update meta descriptions
- Add new content regularly
- Monitor backlink profile
- Update Google My Business regularly

## Important Notes

- Keep your tracking IDs secure and don't commit them to public repositories
- Test analytics in staging environment before production
- Set up conversion goals to track business objectives
- Monitor privacy compliance (GDPR, CCPA)
- Regular backup of analytics data and configurations

## Contact Information for Analytics

For support with Google Analytics setup:
- Google Analytics Help Center
- Google Analytics Academy (free courses)
- Local digital marketing agencies in Ghana

Remember to replace all placeholder tracking IDs with your actual IDs from Google Analytics!
