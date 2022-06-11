import dotenv from 'dotenv'
dotenv.config()

const config = {
  aws_table_name: process.env.DB_TABLE,
  aws_remote_config: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-west-1',
  }
}

export default config