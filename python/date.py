from dateutil import relativedelta
from datetime import datetime, timedelta, date

print(date(2022,2,1) + relativedelta.relativedelta(months = 1) - timedelta(days = 1))