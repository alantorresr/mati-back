# POC of Mati API.

## Create account.

Regiter [here](https://dashboard.getmati.com/auth/signup) and sign in.

## Configure requirements of authentication.

In the main page of your dashboard, in SDKs Customization you can personalize some features, but the most important are the verification requirements, biometric requirements and country restriction, which are the ones that control de functionality of the component that we going to create.


## Front SDK integration.

Then in the SDKs Integration tab you can see that Mati generates you a Client ID and a Client Secret in the Integration keys part that you will need later to authenticate in the API.

In the Verify user segment you will see the Web SDK integration that provides you a fragment of code to integrate the SDK to your app.

```html
<script src="https://web-button.getmati.com/button.js">
</script>
<mati-button
  clientid="YOUR_CLIENT_ID"
  metadata="JSON_METADATA_STRING"
/>
```
## Recibe user data to your back-end.

In the same tab in the segment of Receive user verification data you can configure a webhook to receive the user verification data to your back-end.
Only need to click in the Configure new webhook button and you will see a modal, in that modal you need to add the public URL of your back-end and a secret(is optional but you can´t leave this field emptly).
Make a listener in you back-end and it's done.