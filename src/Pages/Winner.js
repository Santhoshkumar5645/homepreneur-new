import React from 'react'

function Winner() {

    const winnerData = [
        {
            category: 'Home Professional',
            id: 'HO-60383',
            candidate_name: 'Josephine Regina Ponmani',
        },
        {
            category: 'Beauty & Wellness',
            id: 'BE-60850',
            candidate_name: 'Gayathri',
        },
        {
            category: 'Arts & Culture',
            id: 'AR-60029',
            candidate_name: 'Shahnaaz Shanavwaas',
        },
        {
            category: 'Digital Homepreneur',
            id: 'DG-61131',
            candidate_name: 'Priyanka Harish',
        },
        {
            category: 'Education & Literature',
            id: 'ED-60582',
            candidate_name: 'Sindhu S',
        },
        {
            category: 'Agriculture',
            multiple: 'yes',
            id: 'AG-61202',
            candidate_name: 'Radhalakshmi Sathishkumar',
        },
        {
            category: 'Agriculture',
            multiple: 'no',
            id: 'AG-60893',
            candidate_name: 'Sathya Ravi        ',
        },
        {
            category: 'Social welfare',
            id: 'SO-62106',
            candidate_name: 'Aishwarya Sivakumar',
        },
        {
            category: 'NRI',
            id: 'NR-61084',
            candidate_name: 'Bhuwaneswari Kumaravel',
        },
        {
            category: 'Media & Entertainment',
            id: 'ME-61117',
            candidate_name: 'Gowrisankari Sureshkumar',
        },
        {
            category: 'Sports & Fitness',
            id: 'SP-61144',
            candidate_name: 'Vithya Naganathan',
        },
        {
            category: 'Healthcare',
            id: 'HE-61506',
            candidate_name: 'Vardhini Karthik',
        },
        {
            category: 'Food & Beverages',
            id: 'FO-61042',
            candidate_name: 'Geetha Mallineni ',
        },
    ]

    const inspirationalWinner = [
        {
            category: 'Social Welfare',
            id: 'SO-62090',
            candidate_name: 'Renuka Ramakrishnan ',
        },
        {
            category: 'Food & Beverages',
            multiple: 'yes',
            id: 'FO-62039',
            candidate_name: 'Shantha Raghavan ',
        },
        {
            category: 'Food & Beverages',
            multiple: 'no',
            id: 'FO-61770',
            candidate_name: 'HEMALATHA CHANDRABOSE',
        },
    ]

    const special_mentions = [
        {
            category: 'Home Professional',
            id: 'ME-61939',
            row: true,
            hide:'no',
            rowSpan:5,
            candidate_name: 'Bharani Priya',
        },
        {
            category: 'Home Professional',
            id: 'HO-61777',
            hide:'yes',
            row: false,
            candidate_name: 'Lalitha Balu ',
        },
        {
            category: 'Home Professional',
            id: 'HO-60572',
            hide:'yes',
            row: false,
            candidate_name: 'Sivashankari LNV',
        },
        {
            category: 'Home Professional',
            id: 'HO-61576',
            row: false,
            hide:'yes',
            candidate_name: 'Asmath. A Asmath. A',
        },
        {
            category: 'Home Professional',
            id: 'HO-61314',
            hide:'yes',
            row: false,
            candidate_name: 'Vinatha Hari ',
        },
        {
            category: 'Beauty & Wellness',
            id: 'BE-60798',
            candidate_name: 'Preethi Ramadoss',
        },
        {
            category: 'Digital Homepreneur',
            id: 'DG-61869',
            rowSpan:3,
            hide:'no',
            candidate_name: 'Paramu Thals ',
        },
        {
            category: 'Digital Homepreneur',
            id: 'DG-62032',
            hide:'yes',
            candidate_name: 'Dhanashree Baskar',
        },
        {
            category: 'Digital Homepreneur',
            id: 'DG-61714',
            hide:'yes',
            candidate_name: 'Sankareshwari Gunasekaran',
        },
        {
            category: 'Education & Literature',
            rowSpan:2,
            hide:'no',
            id: 'ED-60021',
            candidate_name: 'Veena Venkatraman ',
        },
        {
            category: 'Education & Literature',
            id: 'ED-61995',
            hide:'yes',
            candidate_name: 'Ranjani K Vivek ',
        },
        {
            category: 'Agriculture',
            rowSpan:2,
            hide:'no',
            id: 'AG-61232',
            candidate_name: 'Jaya Man',
        },
        {
            category: 'Agriculture',
            hide:'yes',
            id: 'AG-60157',
            candidate_name: 'Harshini Arun',
        },
        {
            category: 'Social welfare',
            rowSpan:2,
            hide:'no',
            id: 'SO-61318',
            candidate_name: 'Nachiya Sampath Kumar',
        },
        {
            category: 'Social welfare',
            hide:'yes',
            id: 'SO-61572',
            candidate_name: 'Bhavani K',
        },
        {
            category: 'Media & Entertainment',
            rowSpan:2,
            hide:'no',
            id: 'ME-61536',
            candidate_name: 'SARA VIJAY',
        },
        {
            category: 'Media & Entertainment',
            hide:'yes',
            id: 'ME-61837',
            candidate_name: 'CHANDINI RAMESH ',
        },
        {
            category: 'Food & Beverages',
            id: 'FO-61299',
            candidate_name: 'Sudha Kumar',
        },
        {
            category: 'Arts & Culture',
            rowSpan:2,
            hide:'no',
            id: 'AR-62093',
            candidate_name: 'KALAIVANI S',
        },
        {
            category: 'Arts & Culture',
            hide:'yes',
            id: 'AR-61317',
            candidate_name: 'Gayathri Shankarnarayan',
        },
       
    ]

    return (
        <>
            <div className='flex flex-col items-center gap-5 justify-center py-20 px-2'>
                <p className='text-center text-4xl text-primary font-bold'>Winners</p>
                <table className=' p-5 shadow-md'>
                    <tr className=''>
                        <th className='p-5 border border-primary'>Category</th>
                        <th className='p-5 border border-primary'>Registration Number</th>
                        <th className='p-5 border border-primary'>Candidate name</th>

                    </tr>
                    {
                        winnerData.map((item, index) =>

                            <tr className={`${(index + 1) % 2 === 0 ? '' : ''}`}>
                                {item.multiple && item.multiple === 'no' ?
                                    ''
                                    :
                                    <td rowSpan={item.multiple && item.multiple === 'yes' ? 2 : ''} className='p-5 text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.category}</td>

                                }
                                <td className='p-5 whitespace-nowrap text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.id}</td>
                                <td className='p-5 text-center text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.candidate_name}</td>
                            </tr>
                        )
                    }
                </table>

                <p  className='text-center text-4xl text-primary font-bold'>INSPIRATIONAL WINNERS</p>
                <table className=' p-5 shadow-md'>
                    <tr className=''>
                        <th className='p-5 border border-primary'>Category</th>
                        <th className='p-5 border border-primary'>Registration Number</th>
                        <th className='p-5 border border-primary'>Candidate name</th>

                    </tr>
                    {
                        inspirationalWinner.map((item, index) =>

                            <tr className={`${(index + 1) % 2 === 0 ? '' : ''}`}>
                                {item.multiple && item.multiple === 'no' ?
                                    ''
                                    :
                                    <td rowSpan={item.multiple && item.multiple === 'yes' ? 2 : ''} className='p-5 text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.category}</td>

                                }
                                <td className='p-5 whitespace-nowrap text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.id}</td>
                                <td className='p-5 text-center text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.candidate_name}</td>
                            </tr>
                        )
                    }
                </table>

                <p  className='text-center text-4xl text-primary font-bold'>Special Mentions</p>
                <table className=' p-5 shadow-md'>
                    <tr className=''>
                        <th className='p-5 border border-primary'>Category</th>
                        <th className='p-5 border border-primary'>Registration Number</th>
                        <th className='p-5 border border-primary'>Candidate name</th>

                    </tr>
                    {
                        special_mentions.map((item, index) =>

                            <tr className={`${(index + 1) % 2 === 0 ? '' : ''}`}>
                                {item.hide && item.hide === 'yes' ?
                                    ''
                                    :
                                    <td rowSpan={item.hide && item.hide =='no' ? item.rowSpan : ''} className='p-5 text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.category} </td>

                                }
                                <td className='p-5 whitespace-nowrap text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.id}</td>
                                <td className='p-5 text-center text-xs md:text-sm lg:text-sm xl:text-md border border-paragraph'>{item.candidate_name}</td>
                            </tr>
                        )
                    }
                </table>

               

            </div>
        </>
    )
}

export default Winner