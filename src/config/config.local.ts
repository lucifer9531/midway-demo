import { EggAppConfig, PowerPartial } from 'egg';
import { ConnectionOptions } from 'typeorm';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default () => {
  const config = {} as DefaultConfig;

  config.orm = {
    type: 'mysql',
    host: '60.205.181.203',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
    // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
    synchronize: false,
    // 打印日志
    logging: true,
    // 字符集
    charset: 'utf8',
  } as ConnectionOptions;

  config.logger = {
    coreLogger: {
      consoleLevel: 'INFO',
    },
  };

  return config;
};
