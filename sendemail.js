var sendmail = require('../sendmail')({silent: true})
sendmail({
  from: 'test@yourdomain.com',
  to: 'binglu895@126.com',
  replyTo: 'binglu895@126.com',
  subject: 'MailComposer sendmail',
  html: 'Mail of test sendmail ',
  attachments: [
    {   // utf-8 string as an attachment
      filename: 'test1.json',
      content: 'hello world!'
    },
    {   // binary buffer as an attachment
      filename: 'text2.txt',
      content: new Buffer('hello world!', 'utf-8')
    },
        // {   // file on disk as an attachment
        //     filename: 'text3.txt',
        //     path: '/path/to/file.txt' // stream this file
        // },
        // {   // filename and content type is derived from path
        //     path: '/path/to/file.txt'
        // },
    {   // define custom content type for the attachment
      filename: 'text.bin',
      content: 'hello world!',
      contentType: 'text/plain'
    },
    {   // use URL as an attachment
      filename: 'output-1.json',
      path: 'output-1.json'
    },
    {   // encoded string as an attachment
      filename: 'text1.txt',
      content: 'aGVsbG8gd29ybGQh',
      encoding: 'base64'
    },
    {   // data uri as an attachment
      path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
    }
  ]
}, function (err, reply) {
  console.log(err && err.stack)
  console.dir(reply)
})
