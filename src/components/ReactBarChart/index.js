import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    group_name: 'Group A',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'Group B',
    boys: 3000,
    girls: 500,
  },
  {
    group_name: 'Group C',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: 'Group D',
    boys: 700,
    girls: 1200,
  },
]

const ReactBarChart = () => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="bg-container">
      <ResponsiveContainer height={500} width="100%">
        <BarChart data={data} margin={{top: 5}}>
          <XAxis tick={{stroke: 'gray', strokeWidth: 1}} dataKey="group_name" />
          <YAxis
            tick={{stroke: 'gray', strokeWidth: 0}}
            tickFormatter={DataFormatter}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ReactBarChart
