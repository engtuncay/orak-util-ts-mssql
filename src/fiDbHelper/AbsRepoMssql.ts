import { FiMssql } from "./FiMssql.js";

export class AbsRepoMssql {
    
  connProfile? : string; 
  
  public getDbHelper() : FiMssql
    {
      //Console.WriteLine($"dbhelper: {connProfile}");
      return FiMssql.buiWitProfile(this.connProfile);
    }



}