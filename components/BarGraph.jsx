import { BarGraphData } from '@/data/data'
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'



const BarGraph = () => {
	return (
		<div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
			<h1 className='text-center font-bold'>Monthly Sales Revenue</h1>
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart width={750} height={650} data={BarGraphData}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='month' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='sales' stackId='a' fill='#8884d8' />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default BarGraph
