// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mailgun from "mailgun-js"

export default function handler(req, res) {

    //Details received from the form 
    const { _for, services, name, phoneNumber, email, street, suburb, postCode, message } = req.body

    //Mail Body being composed with the data being provided by the user through form 
    const emailText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>

    <style>
        html{
            font-family: Poppins, Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        body{
            margin: 1rem;
            background-color: #eee;

            color: #333;

            text-align: center;
        }
        h1{
            font-size: 24px;
            font-weight: 600;
            color: #444;

            /*background-color: rgba(95,36,133,1);*/
        }
        table{
            margin: auto;
            background: rgb(196,195,224);
            background-color: #fff;

            color: #333;
            padding:5px;

            font-size: 16px;
            text-align: left;

            border-radius: 10px;

            box-shadow: 0 0 10px #44444455 ;
        }
        table tr:first-child{
            font-size: 18px;
            font-weight: 700;
        }
        table td{
            padding: 10px 16px 10px 16px;
        }
        .email-container{
            padding: 2px;
        }
    
    </style>
</head>
<body>
    <div class="email-container">
        <h1>New Client Request</h1>
        <table>
            <tr>
                <td><p>#</p></td>
                <td><p>Items</p></td>
                <td><p>Details</p></td>
            </tr>
            <tr>
                <td><p>1.</p></td>
                <td><p>Name of the requester</p></td>
                <td><p>${name}</p></td>
            </tr>
            <tr>
                <td><p>2.</p></td>
                <td><p>For whome is this request for?</p></td>
                <td><p>${_for}</p></td>
            </tr>
            <tr>
                <td><p>3.</p></td>
                <td><p>Services</p></td>
                <td><p>${services}</p></td>
            </tr>
            <tr>
                <td><p>4.</p></td>
                <td><p>Phone Number</p></td>
                <td><p>${phoneNumber}</p></td>
            </tr>
            <tr>
                <td><p>5.</p></td>
                <td><p>Email address</p></td>
                <td><p>${email}</p></td>
            </tr>
            <tr>
                <td><p>6.</p></td>
                <td><p>Street</p></td>
                <td><p>${street}</p></td>
            </tr>
            <tr>
                <td><p>7.</p></td>
                <td><p>Suburb</p></td>
                <td><p>${suburb}</p></td>
            </tr>
            <tr>
                <td><p>8.</p></td>
                <td><p>Postcode</p></td>
                <td><p>${postCode}</p></td>
            </tr>
             <tr>
                <td><p>10.</p></td>
                <td><p>Message</p></td>
                <td><p>${message}</p></td>
            </tr>
        </table>
    </div>
</body>
</html>`

    //Creating the auth object
    const mailGun = () => mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN
    })

    //sending the email
    mailGun().messages().send({
        from: "Interested Person <jhon@mg.yourdomain.com>", // sender address
        to: `${email}`, //email address of the receiver
        subject: "WoH Service Registration", // Subject line
        html: emailText // html body
    },
        (error, body) => {
            if (error)
                res.status(500).send({ message: "Error occured while sending the email." })
            else
                res.status(200).send({ message: "Email was successfully send." })
        })
}