import React from 'react'

const filteredCards = ({ filteredData }) => {
    return (
        filteredData.length > 0
            ? filteredData.map(
                (item, i) =>
                    item.data.tenderId === tenderID && (
                        <Grid item xs={12} md={4} lg={3} key={i}>
                            <>
                                <AdminListViewCard
                                    values={item.data}
                                    selectedProposalValue={selectedProposalValue}
                                    setSelectedProposalValue={setSelectedProposalValue}
                                />
                            </>
                        </Grid>
                    )
            )
            : proponentValues.map(
                (proponentValue, index) =>
                    proponentValue.tenderId === tenderID && (
                        <Grid item xs={12} md={4} lg={3} key={index}>
                            <>
                                <AdminListViewCard
                                    values={proponentValue}
                                    selectedProposalValue={selectedProposalValue}
                                    setSelectedProposalValue={setSelectedProposalValue}
                                />
                            </>
                        </Grid>
                    )
            )
    )
}

export default filteredCards