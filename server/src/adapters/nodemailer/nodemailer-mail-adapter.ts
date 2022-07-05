import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "a61e7441b7c8c7",
      pass: "57a0b316cd6a8b"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail (data: SendMailData) {
        const { subject, body } = data;

            await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Leandro Goerck <lgoerck@universo.univates.br>',
            subject,
            html: body,
        })
    }
}

