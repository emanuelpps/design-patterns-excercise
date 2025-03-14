class GlobalConfig {
  public static instance: GlobalConfig;
  public ConfigValues: string[];

  constructor() {
    this.ConfigValues = [];
  }

  public static getInstance() {
    if (!GlobalConfig.instance) {
      return (GlobalConfig.instance = new GlobalConfig());
    }
    return GlobalConfig.instance
  }

  setGlobalConfig(header: string, api: string) {
    this.ConfigValues = [header, api];
  }

  getGlobalConfig() {
    return this.ConfigValues;
  }
}

const config = GlobalConfig.getInstance();

config.setGlobalConfig("laldkasldkas", "http:///www.api.dev")


console.log(config.getGlobalConfig());